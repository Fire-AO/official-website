import "@/pages/home/page/css/MainActivity.css";
// import DetailDes from './DetailDes';
// import Modal from 'react-modal';
// import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


// const modalStyles = {
//     overlay: {
//         zIndex: 1000,

//     },
//     content: {
//         backgroundColor: 'rgb(0,0,0)',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: '80%',
//         maxWidth: '600px',
//         height: '90%',
//         maxHeight: '700px',
//         border: 'none',
//         borderRadius: '8px',
//         padding: '20px',
//         zIndex: 1001,
//     },
// };

interface Activity {
    id: number;
    title: string;
    detail: string;
    image: string;
    Ntitle?: string[];
    Nimage: string[];
    next: string;
}

function MainActivity() {
    // const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    const navigate = useNavigate();

    // useEffect(() => {
    //     // 모달이 열릴 때 body에 스크롤 숨김 스타일 적용
    //     if (modalIsOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         // 모달이 닫힐 때 body 스크롤 복원
    //         document.body.style.overflow = 'auto';
    //     }
    // }, [modalIsOpen]);

    const activities = [
        {
            id: 1,
            title: '스터디 활동',
            detail: '알고리즘, 책 스터디 등',
            image: 'asset/group6.png',
            Ntitle: ['깃허브로 관리되는 체계적인 스터디', '깃허브로 관리되는 체계적인 스터디', '서버파트 스터디', '서버파트 스터디', '알고리즘 스터디'],
            Nimage: ['asset/github1.png', 'asset/github2.png', 'asset/serverstudy.jpg', 'asset/serverstudy2.png', 'asset/study3.png'],
            next: "/about"
        },
        {
            id: 2,
            title: '세미나',
            detail: '개발 관련 주제 선정 후 발표',
            image: 'asset/group7.png',
            Ntitle: ['깃허브 세미나'],
            Nimage: ['asset/seminar.png'],
            next: "/about"
        },
        {
            id: 3,
            title: '프로젝트',
            detail: '직접 앱이나 웹을 멘토링 받으면서 만들어보기',
            image: 'asset/group21.png',
            Ntitle: ['웹 프로젝트', '경쟁식 프로젝트'],
            Nimage: ['asset/webproject.png', 'asset/webproject2.png'],
            next: "/about"
        },
        {
            id: 4,
            title: '파티',
            detail: '학기별 개강파티 + 종강파티',
            image: 'asset/group22.png',
            Ntitle: ['개강파티', '종강파티'],
            Nimage: ['asset/drink1.jpg', 'asset/drink2.png'],
            next: "/archive"
        },
        {
            id: 5,
            title: 'MT',
            detail: '4월 중순 쯤',
            image: 'asset/group23.png',
            Ntitle: ['단체 사진', '게임', '바베큐'],
            Nimage: ['asset/mt2.png', 'asset/mt1.jpg', 'asset/mt3.png'],
            next: "/archive"
        },
        {
            id: 6,
            title: '총회',
            detail: '11월 말 쯤',
            image: 'asset/group24.png',
            Ntitle: ['연말에 진행되는 총회', '선배님들과 함께하는 총회', '선배님들과 함께하는 총회'],
            Nimage: ['asset/meeting1.jpg', 'asset/meeting2.jpg', 'asset/meeting3.jpg'],
            next: "/archive"
        },
        {
            id: 7,
            title: '스터디원 소개',
            detail: '',
            image: '',
            // Ntitle: ['연말에 진행되는 총회', '선배님들과 함께하는 총회', '선배님들과 함께하는 총회'],
            Nimage: ['asset/meeting1.jpg', 'asset/meeting2.jpg', 'asset/meeting3.jpg'],
            next: "/intro"
        },
    ];

    const handleActivityClick = (activity: Activity) => {
        // setSelectedActivity(activity);
        // setModalIsOpen(true); // 모달을 엽니다.
        navigate(activity.next);
    };

    // const handleCloseModal = () => {
    //     setSelectedActivity(null);
    //     setModalIsOpen(false); // 모달을 닫습니다.
    // };

    return (

        <>
            <div className='main-container dark:bg-black'>
                <div className="animation">
                    <div className="marquee-container">
                        <p className="marquee-text">FireAO&nbsp;&nbsp;&nbsp;&nbsp;FireAO&nbsp;&nbsp;&nbsp;&nbsp;FireAO&nbsp;&nbsp;&nbsp;&nbsp;FireAO&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                </div>
                <div className="mainEng"><p>Fire AO</p></div>
                <div className="mainKor"><p>주요 활동 내용</p></div>
                <div className='figure4'></div>
                <div className='figure5'></div>
                <div className='figure6'></div>
                {activities.map((activity: Activity) => (

                    <button key={activity.id} className="activity bg-[#fafafa] dark:bg-[#191919]" onClick={() => handleActivityClick(activity)}>
                        {
                            activity.image ?
                                <>
                                    <img src={activity.image} alt={activity.title} id="activitypic" />
                                    <div className="actext text-black dark:text-white">
                                        <p id="actitle">{activity.title}</p>
                                        <p id="acdetail">{activity.detail}</p>
                                    </div>
                                    <img src="asset/vector.png" alt="vector" id="vector"></img>
                                </>
                                :
                                <>
                                    <div className="actext ml-6">
                                        <p id="actitle" className="text-black dark:text-white">{activity.title}</p>
                                    </div>
                                    <img src="asset/vector.png" alt="vector" id="vector"></img>
                                </>
                        }
                    </button>
                ))}

                <div className='figure7'></div>
                <div className='figure8'></div>
            </div>
            {/* <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={modalStyles}
                contentLabel="Detail Modal"
            >
                <button className="close-button" onClick={handleCloseModal}>X</button>
                {selectedActivity && <DetailDes {...selectedActivity} />}
            </Modal> */}
        </>
    );
}

export default MainActivity;