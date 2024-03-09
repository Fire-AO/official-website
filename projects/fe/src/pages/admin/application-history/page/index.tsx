import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Application {
    aWord: string;
    id: string;
    name: string;
    phoneNum: string;
}

const index = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [applications, setApplications] = useState<Application[]>([]);

    useEffect(() => {
        fetch("/api/applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location.state)
        })
            .then(res => {
                if (res.status !== 200)
                    navigate("/admin/sign-in")
                return res.json();
            })
            .then((data: Application[]) => {
                setApplications(data);
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <>
            <table
                className="table-auto w-full text-black dark:text-white/90 text-center bg-black/10 dark:bg-white/10 rounded-2xl overflow-hidden shadow-lg mt-10 max-w-[1000px]"
            >
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>전화번호</th>
                        <th>한 마디</th>
                    </tr>
                </thead>
                {
                    applications && applications.map((application) => {
                        return (
                            <tbody
                                key={application.id}
                            >
                                <tr>
                                    <td>{application.name}</td>
                                    <td>{application.phoneNum}</td>
                                    <td>{application.aWord}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </>
    )
}

export default index