var TabService= function(length,panes,data,fileContent)
{
    this.length=length;
    this.panes=panes;
    this.data=data;
    this.fileContent=fileContent;
}

TabService.prototype.addTab = function(){

    var tabUtils= new Tab(this.length,this.panes,this.data,this.fileContent);
    tabUtils.addTab();
};
