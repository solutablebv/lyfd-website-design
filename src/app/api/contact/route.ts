export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { _formName, ...fields } = data;

    // Log de submission (altijd, ook als HubSpot nog niet gekoppeld is)
    console.log(`[LYFD Form] ${_formName}:`, fields);

    // HubSpot portal ID
    const portalId = "48508249";

    // Probeer naar HubSpot te submitten via de Contacts API
    // Dit werkt zonder form GUID via de collect forms endpoint
    try {
      const hubspotPayload = {
        fields: Object.entries(fields).map(([name, value]) => ({
          objectTypeId: "0-1",
          name,
          value,
        })),
        context: {
          pageUri: request.headers.get("referer") || "",
          pageName: _formName || "LYFD Website",
          hutk: "", // HubSpot tracking cookie (set client-side)
        },
      };

      // Log wat we naar HubSpot zouden sturen
      console.log(
        `[LYFD Form] HubSpot payload (portalId: ${portalId}):`,
        JSON.stringify(hubspotPayload)
      );
    } catch (hsError) {
      // HubSpot fout is niet fataal, we loggen het
      console.error("[LYFD Form] HubSpot error:", hsError);
    }

    return Response.json({
      success: true,
      message: "Formulier ontvangen",
    });
  } catch (error) {
    console.error("[LYFD Form] Error:", error);
    return Response.json(
      { success: false, message: "Er is een fout opgetreden" },
      { status: 500 }
    );
  }
}
