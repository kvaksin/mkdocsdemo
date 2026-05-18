def define_env(env):
    """
    This function is required by mkdocs-macros-plugin.
    It defines variables and macros available in Markdown.
    """
    # Example variables — replace with your real IPs and Guacamole path.
    env.variables.update({
        "IP1": "10.10.10.11",
        "IP2": "10.10.10.12",
        "IP3": "10.10.10.13",
        "IP4": "10.10.10.14",
        "IP5": "10.10.10.15",  
        "IP6": "10.10.10.16",
        "IP7": "10.10.10.17",
        "IP8": "10.10.10.18",
        "IP9": "10.10.10.19",
        "IP10": "10.10.10.20",
        "IP11": "10.10.10.21",
        "IP12": "10.10.10.22",
        "IP13": "10.10.10.23",
        "IP14": "10.10.10.24",
        "IP15": "10.10.10.25",
        "IP16": "10.10.10.26",
        "IP17": "10.10.10.27",
        "IP18": "10.10.10.28",
        "IP19": "10.10.10.29",
        "GUAC_BASE_PATH": "/guacamole",
        "ADUSER": "pcceadmin@pcce.local",
        "ADPASS": "P@ssw0rd123var",
    })

    @env.macro
    def guac_button(connection_id, label, kind="primary"):
        """
        Render a Guacamole session button that opens in a new browser tab.
        The connection_id should match the Guacamole connection name or route.
        """
        base_path = env.variables["GUAC_BASE_PATH"].rstrip("/")
        button_class = f"md-button md-button--tiny md-button--{kind}"
        href = f"{base_path}/#/client/c/{connection_id}"
        return (
            f'<a href="{href}" class="{button_class}" '
            f'target="_blank" rel="noopener noreferrer">{label}</a>'
        )

    @env.macro
    def guac_portal_button(label="Open Guacamole", kind="primary"):
        """Render a Guacamole portal button that opens the landing page."""
        base_path = env.variables["GUAC_BASE_PATH"].rstrip("/")
        button_class = f"md-button md-button--tiny md-button--{kind}"
        return (
            f'<a href="{base_path}/" class="{button_class}" '
            f'target="_blank" rel="noopener noreferrer">{label}</a>'
        )
