Ext.define('iOSOnRailsConf.store.Technologies', {
    extend: 'Ext.data.Store',

    config: {
        model: 'iOSOnRailsConf.model.Technologies',
        proxy: {
            type: 'ajax',
            url: 'resources/technologies.json',
            reader: {
                type: 'json',
                rootProperty: 'technologies'
            }
        },
        autoLoad: true
    }
});

