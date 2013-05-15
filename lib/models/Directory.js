/**
 * Created with IntelliJ IDEA.
 * User: CS11
 * Date: 13/5/13
 * Time: 2:48 PM
 * To change this template use File | Settings | File Templates.
 */
var Directory=function(){

    var path='';
    var name='';
    var type='';
    var nodes={};
    this.directory={};

    this.directory.getPath()
    {
        return path;
    }
    this.directory.getNodes()
    {
        return nodes;
    }
    this.directory.getType()
    {
        return type;
    }
    this.directory.getName()
    {
        return name;
    }

}

