function emptyTextCheck(this_id, item_id){ 
        localStorage.setItem(item_id, document.getElementById(item_id).value);
        let valor = localStorage.getItem(item_id).toString();
        let status = document.getElementById(this_id).checked;
        if(status == false){
            document.getElementById(item_id).value = '';
            document.getElementById(item_id).disabled = true;
        }else{
            document.getElementById(item_id).disabled = false;
            document.getElementById(item_id).value = valor;
            localStorage.removeItem(item_id);
        }
}
