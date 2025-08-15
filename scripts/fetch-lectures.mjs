import fs from 'node:fs/promises'
import path from 'node:path'

const GITHUB_API_FETCH_URL = 'https://api.github.com/repos/TJHSST-Dev-Club/lectures/contents/lectures'

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'Accept': 'application/json' } })
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`)
  }
  return await res.json()
}

async function main() {
  try {
    const fetchedData = await fetchJson(GITHUB_API_FETCH_URL);
    const lectures = {
        upcoming: [],
        previous: [],
    };
    for (const file of fetchedData) {
        const fileText = await fetchJson(file.url);
        const lecture = JSON.parse(Buffer.from(fileText.content, 'base64').toString('utf-8'));
        lectures[lecture.date < new Date().toISOString().split('T')[0] ? 'previous' : 'upcoming'].push(lecture);
    }

    const jsonText = JSON.stringify(lectures, null, 2);

    const outDir = path.resolve(process.cwd(), 'public')
    await ensureDir(outDir)
    const outPath = path.join(outDir, 'lectures.json')
    await fs.writeFile(outPath, jsonText)
    console.log(`[lectures] Fetched and saved to ${outPath}`)
  } catch (err) {
    console.warn('[lectures] Skipped fetch:', err?.message || err)
  }
}

main()

