import { useForm } from "@inertiajs/react";

export default function TambahGuru(){
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: '',
        nip: '',
        mapel: '',
    })

    const submit = (e) => {
        e.preventDefault();
        post('/admin/simpan/guru', {
            onSuccess: () => reset()
        }
        );
    }

    return(
        <>
            <form onSubmit={submit}>
                <div className="">
                    <label htmlFor="">Nama : </label>
                    <input
                        type="text"
                        value={data.nama}
                        onChange={ (e) => setData("nama", e.target.value)
                        } />
                        {errors.nama && <div>Error : {errors.nama}</div>}
                </div>
                <div className="">
                    <label htmlFor="">nip : </label>
                    <input
                        type="text"
                        value={data.nip}
                        onChange={ (e) => setData("nip", e.target.value) }
                    />
                    {errors.nip && <div>Error : {errors.nip}</div>}
                </div>
                <div className="">
                    <label htmlFor="">Mapel : </label>
                    <input
                        type="text"
                        value={data.mapel}
                        onChange={ (e) => setData("mapel", e.target.value)}
                    />
                    {errors.mapel && <div>Error : {errors.mapel}</div>}
                </div>
                <button type="Submit" disabled={processing}>
                    Simpan
                </button>
            </form>
        </>
    )
}
