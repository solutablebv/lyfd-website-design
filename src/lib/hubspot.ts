export async function submitToHubSpot(
  formData: Record<string, string>,
  formName: string
) {
  // Push form data naar HubSpot via de tracking code (als geladen)
  if (typeof window !== "undefined") {
    const win = window as unknown as Record<string, unknown>;
    const _hsq =
      (win._hsq as unknown[][]) || (win._hsq = []);

    // Identify the contact
    if (formData.email) {
      _hsq.push(["identify", { email: formData.email }]);
    }

    // Track de form submission als event
    _hsq.push([
      "trackEvent",
      {
        id: formName,
        value: null,
      },
    ]);
  }

  // Submit via eigen API route voor betrouwbaarheid
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...formData, _formName: formName }),
  });

  if (!response.ok) {
    throw new Error("Formulier kon niet worden verzonden");
  }

  return response.json();
}
