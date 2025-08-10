const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    const base = process.env.REACT_APP_API_URL || "/api";
    const res = await fetch(`${base}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (!res.ok || !data.ok) {
      throw new Error(data?.error || "Failed to send message");
    }
    toast({
      title: "Message sent",
      description: "We got your message and will reply within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  } catch (err) {
    toast({
      title: "Something went wrong",
      description: err.message || "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
