Ext.define('iOSOnRailsConf.profile.Phone', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
        views: ['Main'],
        models: [],
        stores: [],
        controllers: []
    },
    
    //this profile will be activated if we detect we're running on a Phone
    isActive: function(app) {
        return Ext.os.is.Phone;
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('iOSOnRailsConf.view.phone.Main'));
    }
});