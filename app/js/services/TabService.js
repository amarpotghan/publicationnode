var TabService= function(length,panes,data)
{
    this.length=length;
    this.panes=panes;
    this.data=data;
}

TabService.prototype.addTab = function(){

    var tabUtils= new Tab(this.length,this.panes,this.data);
    tabUtils.addTab();
};
