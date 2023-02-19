import EL from '../../utils/EL.js';

const Sidebar = ()=>{
    const sidebar = EL({
        element: 'div',
        className: 'flex flex-col h-screen w-1/5 right-0 absolute overflow-y-scroll ',
        children: [
            EL({
                element: 'div',
                className: 'text-right items-right',
                children: [
                    EL({
                        element: 'ul',
                        className: 'flex flex-col justify-between',
                        children: [
                            EL({
                                element: 'p',
                                className: 'text-sm',
                                innerHTML: 'دسته ها'
                            }),
                            EL({
                                element: 'button',
                                className: 'text-slate-500 text-right hover:text-black m-2',
                                innerHTML: 'املاک'
                            }),
                            EL({
                                element: 'button',
                                className: 'text-slate-500 text-right hover:text-black m-2',
                                innerHTML: 'وسایل نقلیه'
                            }),
                            EL({
                                element: 'button',
                                className: 'text-slate-500 text-right hover:text-black m-2',
                                innerHTML: 'کالای دیجیتال'
                            }),
                            EL({
                                element: 'button',
                                className: 'text-slate-500 text-right hover:text-black m-2',
                                innerHTML: 'خانه و آشپزخانه'
                            }),
                            EL({
                                element: 'button',
                                className: 'text-slate-500 text-right hover:text-black m-2',
                                innerHTML: 'خدمات'
                            }),
                            EL({
                                element: 'button',
                                className: 'text-slate-500 text-right hover:text-black m-2',
                                innerHTML: 'وسایل شخصی'
                            }),
                            EL({
                                element: 'button',
                                className: 'text-slate-500 text-right hover:text-black m-2',
                                innerHTML: 'سرگرمی'
                            }),
                            EL({
                                element: 'button',
                                className: 'text-slate-500 text-right hover:text-black m-2',
                                innerHTML: 'احتماعی'
                            }),
                            EL({
                                element: 'button',
                                className: 'text-slate-500 text-right hover:text-black m-2',
                                innerHTML: 'تجهیزات و صنعتی'
                            }),
                            EL({
                                element: 'button',
                                className: 'text-slate-500 text-right hover:text-black m-2',
                                innerHTML: 'استخدام و کاریابی'
                            })
                        ]
                    })
                ]                
            }),
            EL({
                element: 'div',
                className: 'bg-gray-600 w-full h-px',
            }),
            EL({
                element: 'button',
                className: 'text-sm text-right m-2',
                innerHTML: 'محل'
            }),
            EL({
                element: 'div',
                className: 'bg-gray-600 w-full h-px',
            }),
            EL({
                element: 'button',
                className: 'text-sm text-right m-2',
                innerHTML: 'قیمت'
            }),
            EL({
                element: 'div',
                className: 'bg-gray-600 w-full h-px',
            }),
            EL({
                element: 'button',
                className: 'text-sm text-right m-2',
                innerHTML: 'وضعیت آگهی'
            }),
            EL({
                element: 'div',
                className: 'bg-gray-600 w-full h-px',
            })
        ]
    })

    return sidebar;
}

export default Sidebar;