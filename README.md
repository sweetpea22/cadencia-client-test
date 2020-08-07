# Cadencia - Open Data Explorer

## What is it

❗️This is a hackathon project.

Cadencia is a tool that makes open data and open APIs more accessible and meaningful to a wider population. We think you don't need to be a graphQL wizard to be able to use the awesome amounts of data on TheGraph, nor do you need to be savvy about CIDs on Filecoin/IPFS to leverage the power of decentralized data storage.

Currently, Cadencia is:

- An interface that abstracts querying subgraphs. The data is grouped by subject matter, so you can compare the data (mostly DeFi at this point) that you care most about, side-by-side across platforms ✅
- Filecoin Data Dashboard (awaitng the real-time data!) that provides information about the state of global storage at a glance ✅
  - Retrieval compared to Storage
  - Deal making information (average prices, size)
  - Storage Capacity Stats ✅
  - Geospatial data
  - Verified vs Non Verified Data
  - Filecoin client versioning

In the near future, we plan to include these features

- Searching by CID (need to figure out how it Filecoin data is going to be indexed)
- User accounts to save finds, and upload JSON data of your own (Textile Buckets)
- No-code data visualizer, so you can get insights from aggregated data you've uploaded or found on the explorer

## What it's built with

- Nextjs (React SSR)
- GraphQL
- TypeGraphQL
- Nodejs in Typescript
- Redis and Postgres
- Powergate

Data is currently aggregated from subgraphs on TheGraph, and soon, Filecoin.
