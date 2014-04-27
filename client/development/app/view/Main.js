Ext.define('Xpoit.view.Main', {
    extend: 'Ext.navigation.View',
    xytpe: 'mainPanel',
    id: 'mainPanel',
    requires: [
        'Xpoit.view.Student',
        'Xpoit.view.StudentList'
    ],
    config: {
        navigationBar: {
            hidden: true
        },
        items: [{
            xtype: 'studentListPanel'
        }]
    }
});