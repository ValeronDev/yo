from http.server import BaseHTTPRequestHandler
import json
from urllib.parse import urlparse
import re

def _json_response(handler: BaseHTTPRequestHandler, status: int, payload: dict):
    body = json.dumps(payload).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json")
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    handler.send_header("Access-Control-Allow-Headers", "*")
    handler.send_header("Content-Length", str(len(body)))
    handler.end_headers()
    handler.wfile.write(body)

def _read_json(handler: BaseHTTPRequestHandler):
    try:
        length = int(handler.headers.get("Content-Length", "0"))
        raw = handler.rfile.read(length) if length > 0 else b"{}"
        return json.loads(raw.decode("utf-8") or "{}")
    except Exception:
        return {}

class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path or "/"
        if path in ("/api", "/api/", "/api/health"):
            return _json_response(self, 200, {"ok": True, "service": "valeron-api", "status": "healthy"})
        return _json_response(self, 404, {"ok": False, "error": "Not found", "path": path})

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path or "/"
        if path in ("/api/contact", "/api/contact/"):
            data = _read_json(self)
            name = (data.get("name") or "").strip()
            email = (data.get("email") or "").strip().lower()
            message = (data.get("message") or "").strip()
            company = (data.get("company") or "").strip()

            if not name or not email or not message:
                return _json_response(self, 400, {"ok": False, "error": "name, email, and message are required"})

            email_ok = re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email) is not None
            if not email_ok:
                return _json_response(self, 400, {"ok": False, "error": "invalid email"})

            return _json_response(self, 200, {
                "ok": True,
                "received": {"name": name, "email": email, "company": company, "message": message}
            })

        return _json_response(self, 404, {"ok": False, "error": "Not found", "path": path})
