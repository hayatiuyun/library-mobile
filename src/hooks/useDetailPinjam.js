import  { useState, useEffect } from 'react'
import perpusAPI from '../api/perpus'
import { format, differenceInCalendarDays, isSameDay, isBefore } from 'date-fns'
import { BackHandler } from 'react-native'

export default (id, type, navigation, keyPrevious, paramPrevious) => {
    
    const [dataBook, setDataBook] = useState(null)
    const [qtyTotal, setQtyTotal] = useState(0)
    const [dataPinjam, setDataPinjam] = useState(null)
    const [start_date, setStart_date] = useState(new Date())
    const [end_date, setEnd_date] = useState(new Date())
    const [countDateLate, setCountDateLate] = useState(0)
    const [status, setStatus] = useState("")
    const [total, setTotal] = useState(0)
    const [terlambat, setTerlambat] = useState(false)
    const now = new Date()
    const lateDay = differenceInCalendarDays(now, end_date)
    const denda = 5000;

    const borrowdBook = async (id, type) => {
        await perpusAPI.get(`/borrow/${id}`)
            .then((data) => {
                var _dataBook = data.data.data.borrowd_book
                var _dataPinjam = data.data.data.borrow_card
                var end = new Date(_dataPinjam.end_date)
                var created_at = new Date(_dataPinjam.created_at)
                var start = new Date(_dataPinjam.start_date)
                var qty = []

                _dataBook.forEach(element => {
                    qty.push(element.qty)
                });
                setQtyTotal(qty.reduce((a, b) => a + b, 0))

                if (type === "pinjam") {
                    _dataPinjam.status = "pengembalian"
                    setStatus("peminjaman")
                } else {
                    setStatus("pengembalian")
                }
                
                if (isBefore(end, now) && !isSameDay(now, end)) {
                    setTerlambat(true)
                    _dataPinjam.terlambat = true
                    _dataPinjam.total = _dataPinjam.total + denda
                } 

                setCountDateLate(differenceInCalendarDays(created_at, end))
                setDataBook(_dataBook)
                setDataPinjam(_dataPinjam)
                setEnd_date(end)
                setStart_date(start)
                setTotal(_dataPinjam.total)
            })
    }
    
    const backAction = () => {
        navigation.navigate(keyPrevious, paramPrevious)
        return true;
    };
    
    useEffect(() => {
        borrowdBook(id, type)
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [])
    
    return [borrowdBook, dataBook, qtyTotal, dataPinjam, start_date, end_date, countDateLate, status, total, terlambat, now, lateDay]
}