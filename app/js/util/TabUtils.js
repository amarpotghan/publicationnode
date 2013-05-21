var Tab = function (length, panes, data,fileContent) {
    this.length = length;
    this.panes = panes;
    this.data = data;
    this.fileContent=fileContent;
};


Tab.prototype.addTab = function(){
    //var altxt = this.openFile();
    if(this.data.type == 'file'){
        var i=0;
        var found = false;
        for(i; i<this.length; i++)
        {
            if(this.data.path == this.panes[i].path)
            {
                found = true;
                break;
            }
        }

        if(found){
            this.panes[i].active = true;
        }
        else{
            var pane = new Object();
            pane.title = this.data.name;
            pane.content= this.fileContent[0].text;
            pane.path = this.data.path;
            pane.active = true;
            // var pane = {title:"New Tab", content:"New content"};
            this.panes.push(pane);
        }
    }
};
