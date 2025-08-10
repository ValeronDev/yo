from http.server import BaseHTTPRequestHandler
import json
import os
from urllib.parse import urlparse, parse_qs

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Set CORS headers
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.end_headers()
        
        # Parse the URL
        parsed_url = urlparse(self.path)
        path = parsed_url.path
        
        # Route handling
        if path == '/' or path == '/api' or path == '/api/':
            response = {
                "message": "Hello World", 
                "status": "API working",
                "endpoints": ["/", "/status"]
            }
        elif path == '/status' or path == '/api/status':
            # Mock status data for testing
            response = [
                {
                    "id": "test-123", 
                    "client_name": "Test Client",
                    "timestamp": "2025-01-09T12:00:00Z"
                },
                {
                    "id": "test-456",
                    "client_name": "Another Client", 
                    "timestamp": "2025-01-09T11:30:00Z"
                }
            ]
        else:
            response = {
                "error": "Not Found",
                "path": path,
                "available_endpoints": ["/", "/status"]
            }
        
        # Send response
        self.wfile.write(json.dumps(response, indent=2).encode())

    def do_POST(self):
        # Set CORS headers
        self.send_response(201)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.end_headers()
        
        # Parse the URL
        parsed_url = urlparse(self.path)
        path = parsed_url.path
        
        if path == '/status' or path == '/api/status':
            try:
                # Read POST data
                content_length = int(self.headers.get('Content-Length', 0))
                post_data = self.rfile.read(content_length).decode('utf-8')
                data = json.loads(post_data)
                
                # Create response
                response = {
                    "id": "new-789",
                    "client_name": data.get("client_name", "Unknown"),
                    "timestamp": "2025-01-09T12:00:00Z",
                    "status": "created"
                }
            except Exception as e:
                response = {
                    "error": "Invalid JSON or missing data",
                    "details": str(e)
                }
        else:
            response = {
                "error": "POST not supported for this endpoint",
                "path": path
            }
        
        # Send response
        self.wfile.write(json.dumps(response, indent=2).encode())

    def do_OPTIONS(self):
        # Handle CORS preflight requests
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.end_headers()
