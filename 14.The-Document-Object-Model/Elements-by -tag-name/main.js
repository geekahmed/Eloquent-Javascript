
function getElementById(node, elementName){
    let elementNameUppercase = elementName.toUpperCase();
    let arrRes = [];
    function exploreNodes(node){
        for (let i = 0; i < node.childNodes.length; i++) {
            let child = node.childNodes[i];
            if (child.nodeType ==   document.ELEMENT_NODE){
                if(child.nodeName == elementNameUppercase) arrRes.push(child);
                exploreNodes(child);
            }
        }

    }

    exploreNodes(node);
   
    return arrRes;
}


console.log(getElementById(document.body, "h1").length);
console.log(getElementById(document.body, "span").length);
let para = document.querySelector("p");
console.log(getElementById(para, "span").length);

