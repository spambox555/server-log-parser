function onFileLoaded(file) {
    return function (evt) {
        console.log(file);
        $('#contents')
            .append("file added "+file.name+":\n")
            .append(evt.target.result)
            .append("\n");
        console.log("file is read");
    };
}
Dropzone.options.logFileZone = {
    autoProcessQueue: false,
    addedfile: function (file) {
        console.log("added file");
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = onFileLoaded(file);
    }
}