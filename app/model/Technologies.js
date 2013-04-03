Ext.define('iOSOnRailsConf.model.Technologies', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'Number' },
            { name: 'name', type: 'String' },
            { name: 'image', type: 'String' }
        ]
    }
});

