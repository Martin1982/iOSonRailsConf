Ext.define('iOSOnRailsConf.profile.Desktop', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
        views: ['Main'],
        models: [],
        stores: [],
        controllers: []
    },
    
    //this profile will be activated if we detect we're running on a Desktop
    isActive: function(app) {
        return Ext.os.is.Desktop;
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('iOSOnRailsConf.view.desktop.Main'));
    }
});