module.exports = {
    activate: function() {
        atom.commands.add('atom-workspace', {
            'atom-hastebin:share-code': this.share
        });
    },

    share: function() {
        var editor = atom.workspace.getActiveTextEditor();
        content = editor.getText();
        url = 'https://hastebin.com';
        xhr = new XMLHttpRequest();
        xhr.open('POST', url + '/documents', false);
        xhr.send(content);
        if (xhr.status != 200)
            alert('Error while sharing file :(');
        else {
            var result = JSON.parse(xhr.responseText);
            atom.clipboard.write('hastebin.com/' + result.key);
        }
    }
};
