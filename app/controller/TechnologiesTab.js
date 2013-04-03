Ext.define('iOSOnRailsConf.controller.TechnologiesTab', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            picture: 'img'
        },
        control: {
            'picture': {
                'tap': 'onPictureTap'
            }
        }
    },

    onPictureTap: function(image) {
        var src = image.getSrc();
        Ext.Msg.alert(
            'Image tapped',
            'You tapped ' + src
        )
    }
});
