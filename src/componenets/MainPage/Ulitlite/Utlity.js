import swal from "sweetalert";

const GetLocalStrogeData = () => {
    const prevantdata = localStorage.getItem('card');
    if (prevantdata) {
        return JSON.parse(prevantdata)
    }
    return []
}

const SaveLocalStargedata = (id) => {
    const datas = GetLocalStrogeData();
    const dublicketdata = datas.find(dataid => dataid === id);
    if (!dublicketdata) {
        datas.push(id)
        localStorage.setItem('card', JSON.stringify(datas))
        return swal("Good job!", "You clicked the button!", "success")
    } else {
        return swal("Sorry This item is all ready added")
    }

}

export { GetLocalStrogeData, SaveLocalStargedata }