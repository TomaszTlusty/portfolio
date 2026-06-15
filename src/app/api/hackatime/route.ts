export const revalidate = 3600;

export async function GET() {
  try {
    const headers = {
      Authorization: `Bearer ${process.env.HACKATIME_API_KEY}`,
    };

    const [statsRes, projectsRes] = await Promise.all([
      fetch("https://hackatime.hackclub.com/api/v1/users/Tlusty/stats", {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        "https://hackatime.hackclub.com/api/v1/users/Tlusty/stats?features=projects",
        {
          headers,
          next: { revalidate: 3600 },
        },
      ),
    ]);

    const stats = await statsRes.json();
    const projects = await projectsRes.json();

    const d = stats.data;
    const p = projects.data;

    return Response.json({
      total: d?.human_readable_total ?? null,
      topLang: d?.languages?.[0]?.name ?? null,
      topProject: p?.projects?.[0]?.name ?? null,
    });
  } catch {
    return Response.json({ total: null, topLang: null, topProject: null });
  }
}
