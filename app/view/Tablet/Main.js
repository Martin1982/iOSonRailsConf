Ext.define('iOSOnRailsConf.view.tablet.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        layout: 'hbox',
        items: [
            {
                flex: 1,
                xtype: 'techlist'
            },
            {
                flex: 2,
                layout: 'vbox',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        flex: 1,
                        styleHtmlContent: true,
                        scrollable: true,

                        html: [
                            "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                            "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                            "and refresh to change what's rendered here."
                        ].join("")
                    },
                    {
                        flex: 2,
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});

