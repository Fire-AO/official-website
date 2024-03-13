import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Application {
    aWord: string;
    id: string;
    name: string;
    phoneNum: string;
    submitedAt: Date;
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
                setApplications(
                    data.map((application) => {
                        return {
                            ...application,
                            submitedAt: new Date(application.submitedAt)
                        }
                    }
                    )
                )
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
                        <th>지원 날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applications && applications.map((application) => {
                            return (
                                <tr key={application.id} className="border-t-[1px] dark:border-t-slate-300">
                                    <td className="text-nowrap pr-2">{application.name}</td>
                                    <td className="text-nowrap pr-2">{application.phoneNum}</td>
                                    <td className="pr-2">{application.aWord}</td>
                                    <td className="text-nowrap">{application.submitedAt.toLocaleDateString()}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default index