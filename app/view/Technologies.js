Ext.define('iOSOnRailsConf.view.Technologies', {
    extend: 'Ext.dataview.List',
    xtype: 'techlist',

    config: {
        store: 'Technologies',
        itemTpl: '<img src="{image}" class="listImg">{name}'
    }
});

