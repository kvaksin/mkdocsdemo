# Guacamole Service

Use Apache Guacamole for browser-based RDP and SSH sessions on the same domain as this portal.

## Open the portal

{{ guac_portal_button('Open Guacamole', 'primary') }}

## Session links

The server details page uses Guacamole session buttons that open in a new browser tab.

Guacamole should be published at `/guacamole/` behind a reverse proxy on the same domain.
If you change the mount path, update `GUAC_BASE_PATH` in `docs/overrides/macros/mkdocs_macros.py`.
