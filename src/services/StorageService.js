function load(key) {
    var val = localStorage.getItem(key)
    if (val === 'null') return null
    return (val)? JSON.parse(val) : null;
}

function save(key, val) {
    localStorage[key] = JSON.stringify(val);
}


export default {
    load,
    save
}