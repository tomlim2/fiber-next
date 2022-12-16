export const todos = [
    {
        title: 'Vue2',
        isCompleted: false,
        to:'/',
        details: [
            { task: 'Set up todos', isCompleted: true },
            { task: 'Page transition', isCompleted: true },
            { task: 'Component transition', isCompleted: false },
            { task: '라우터 타입스크립트 셋팅', isCompleted: false },
        ]
    },
    {
        title: 'Widget',
        isCompleted: false,
        to:'/widget',
        details: [
            { task: 'GET 데이터 전역화', isCompleted: true },
            { task: 'POST 저장 값 백으로 보내기 전역화', isCompleted: false },
            { task: 'Widget 별로 데이터 가져오기', isCompleted: false }
        ]
    },
    {
        title: 'Outfocus Save',
        isCompleted: false,
        to:'/listener-checker',
        details: [
            { task: 'Layout', isCompleted: false },
            { task: 'Backend set', isCompleted: false },
            { task: 'Data bind', isCompleted: false },
        ]
    },
    {
        title: 'Popcorn effects',
        to:'/popcorn',
        isCompleted: false,
        details: [
            { task: 'Miragete twojs', isCompleted: false },
        ]
    },
]