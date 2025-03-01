
function findTitle(target){
        const parent =target.parentNode;
        const grandparent = parent.parentNode;
        const child = grandparent.querySelector(".title");
        // const nestedChild = child.querySelector(".title");
        return child;
}