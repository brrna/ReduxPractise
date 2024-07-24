export default function (state, action) {
    switch (action.type) {
        case 'ADD_LIST':
            const newList = [...state.nameList, action.payload.name] // namelisti kopyaladı, yeni ismi listeye ekledi
            return {...state, nameList: newList }; //tüm stateleri geri gönderdi, yeni isim eklenmiş listeyi ekledi

        case 'CLEAN_LIST':
            return {...state, newList: []}
    
        default:
            return state;
    }
}