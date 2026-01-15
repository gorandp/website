# Gorandp Full-Stack Website

A full-stack web application hosted on Cloudflare, featuring:
- **Frontend**: React app deployed on Cloudflare Pages
- **Backend**: FastAPI on Cloudflare Workers (Python runtime)
- **Database**: Cloudflare D1 (SQLite-compatible)

## Project Structure

- `frontend/`: React application
- `backend/`: FastAPI API on Workers
- `database/`: D1 schemas and migrations
- `shared/`: Common utilities and types

## Getting Started

1. Install Wrangler: `npm install -g wrangler`
2. Authenticate: `wrangler auth login`
3. Setup frontend: `cd frontend && npm install`
4. Setup backend: `cd backend && uv run pywrangler dev`
5. Develop locally: `cd backend && uv run pywrangler dev` (from respective folders)

## Deployment

- Frontend: `cd frontend && wrangler pages deploy dist`
- Backend: `cd backend && uv run pywrangler deploy`

See individual folders for more details.
