# H1 Jenkins pipeline using nexus repositories

Pretty much the same as my first look at jenkins pipelines, however, here i integrated the nexus repository manager

# H2
Docker repository - Hosted
- Images built were pushed to my nexus docker repository

# H2
npm repository - Proxy
- node akcages userd in my app were pulled through a proxy, and not the official npm repository to allow nexus to cache these packages


