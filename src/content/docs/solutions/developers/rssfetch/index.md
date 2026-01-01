---
title: rssfetch
---

A simple RSS feed fetcher and parser built with [Elysia.js](https://elysiajs.com) and [Bun](https://bun.sh).

A free instance is hosted at: [rssfetch.vercel.app](https://rssfetch.vercel.app). Feel free to use it!

## Deployment
### Vercel
- This project can be directly deployed to Vercel with no additional configuration needed.
- Click the button below to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/mikndotdev/rssfetch)

### Cloudflare Workers
- This project can also be deployed to Cloudflare Workers, but requires some manual setup.
- Follow the instructions in the [Elysia Cloudflare Workers documentation](https://elysiajs.com/integrations/cloudflare-worker.html).

### Docker
- Docker images are available on [GHCR](https://github.com/mikndotdev/rssfetch/pkgs/container/rssfetch).

## Manual Setup

1. Install dependencies:
   ```bash
   bun install
   ```

2. Start the server:
   ```bash
   bun start
   ```
   The server will start on port 3000 by default.

## API Usage

### Fetch RSS Feed

**Endpoint:** `GET /`

**Query Parameters:**

| Parameter | Type     | Required | Description                                      | Default  |
|-----------|----------|----------|--------------------------------------------------|----------|
| `url`     | `string` | **Yes**  | The URL of the RSS feed to fetch.                | -        |
| `type`    | `string` | No       | Sort order for articles: `latest` or `oldest`.   | `latest` |
| `count`   | `number` | No       | The number of articles to return.                | `1`      |
| `step`    | `number` | No       | The offset for pagination (items to skip).       | `0`      |

**Example Request:**

Fetch the latest 3 articles from an RSS feed:

```bash
curl "http://localhost:3000/?url=https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml&count=3"
```

**Example Response:**

```json
{
  "title": "NYT > Top Stories",
  "description": "The New York Times: Top Stories",
  "link": "https://www.nytimes.com",
  "articles": [
    {
      "title": "Example Article Title",
      "link": "https://www.nytimes.com/2024/01/01/example.html",
      "description": "Brief description of the article content.",
      "pubDate": "Mon, 01 Jan 2024 12:00:00 GMT"
    }
    // ... 2 more articles
  ]
}
```
