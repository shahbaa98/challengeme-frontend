import React, { useState, useEffect } from 'react';
import '../style.css'
import { useForm } from 'react-hook-form';





const Newplan = (props) => {
    const { register, handleSubmit } = useForm({

    });
    const strong_points = [{
        categoryName: 'Education',
        options: [
            {
                name: 'בעל יכולות לימודיות טובות',
                value: 0,

            },
            {
                name: 'מגלה עניין רב בתחומים הקשורים ל...',
                value: 0,
            },
            {
                name: 'בעל יכולת הבנה של תהליכים לוגיים',
                value: 0,
            },
            {
                name: 'בעל מוטיבציה להצלחה',
                value: 0,
            },
            {
                name: 'קיימת יכולת למידה עצמאית',
                value: 0,
            },
            {
                name: 'מגיע באופן עקבי',
                value: 0,
            },
            {
                name: 'נתרם מלמידה חזותית',
                value: 0,
            },
            {
                name: 'קיימת שליטה טובה באמצעים טכנולוגיים',
                value: 0,
            },
            {
                name: 'שולט במערכת השעות ובמיקום החדרים',
                value: 0,
            },
            {
                name: 'מעתיק מהלוח באופן עצמאי',
                value: 0,
            },
            {
                name: 'קיימת השתתפות פעילה בכיתה',
                value: 0,
            },
            {
                name: 'נתרם מלמידה שמיעתית',
                value: 0,
            },

        ]
    },
    {
        categoryName: 'Social',
        options: [
            {
                name: 'אהוב חברתית בכיתתו',
                value: 0,

            },
            {
                name: 'חיזוקים חיוביים מעודדים אותו לשיתוף פעולה',
                value: 0,
            },
            {
                name: 'מקבל סמכות ומסגרת',
                value: 0,
            },
            {
                name: 'מצליח ליצור קשר אישי',
                value: 0,
            },
            {
                name: 'בעל חוש הומור',
                value: 0,
            },
            {
                name: 'יוזם קשרים חברתיים',
                value: 0,
            },
            {
                name: 'אוהב חברה',
                value: 0,
            },
            {
                name: 'יוצר קשר טוב עם הצוות החינוכי',
                value: 0,
            },
            {
                name: 'קיימת יכולת הסתגלות טובה לשינויים',
                value: 0,
            },
            {
                name: 'מעוניין בהשתייכות לקבוצת השווים',
                value: 0,
            },
            {
                name: 'בעל דמיון עשיר ומפותח',
                value: 0,
            },
            {
                name: 'משתמשת ברשתות חברתיות באופן מותאם',
                value: 0,
            },
            {
                name: 'מתנהגת בנימוס לזולת ומציעה עזרה',
                value: 0,
            },
            {
                name: 'מבקשת עזרה מחברים בעת הצורך',
                value: 0,
            },
            {
                name: 'מציעה עזרה לחברים',
                value: 0,
            },
        ]
    }]
    const need_to_improve = [{
        categoryName: 'Education',
        options: [
            {
                name: 'קושי ביכולת התארגנות לשיעור',
                value: 0,

            },
            {
                name: 'קושי בניהול זמן',
                value: 0,
            },
            {
                name: 'זקוק לתיווך לשם הנעה ופעולה',
                value: 0,
            },
            {
                name: 'מגלה קושי בריכוז לאורך זמן',
                value: 0,
            },
            {
                name: 'היעדר פנייה ביוזמתו לבקשת עזרה מהצוות החינוכי',
                value: 0,
            },
            {
                name: 'קושי בהתארגנות',
                value: 0,
            },
            {
                name: 'קיים צורך בויסות ועיכוב אימפולסיביות',
                value: 0,
            },
            {
                name: 'אינו נענה לקבל עזרה מהצוות',
                value: 0,
            },
            {
                name: 'הקטנת התיווך עד לעצמאות בביצוע משימות בכיתה',
                value: 0,
            },
            {
                name: 'קצב עבודה איטי במיוחד בעבודה בכיתה',
                value: 0,
            },
            {
                name: 'יש צורך במיקוד רב על מנת להסב את השיח מנושאים שמעוניין בהם אל עבר למידה',
                value: 0,
            },
            {
                name: 'מוותר על ביצוע ונמנע במטלות שמרגיש שהן קשות מדי עבורו',
                value: 0,
            },
            {
                name: 'מתקשה להתמודד עם כישלון בשל שאיפתו לשלמות ולהישגיות',
                value: 0,
            },

        ]
    },
    {
        categoryName: 'Social',
        options: [
            {
                name: 'מתקשה להיפתח להתנסויות חדשות',
                value: 0,

            },
            {
                name: 'ממעט ליזום פנייה אל חבריו',
                value: 0,
            },
            {
                name: 'מעדיף להימנע מסיטואציות חברתיות קבוצתיות',
                value: 0,
            },
            {
                name: 'הרחבת השיח לתחומים רחבים יותר הן מול צוות הכיתה והן מול קבוצת השווים',
                value: 0,
            },
            {
                name: 'קושי בסנגור עצמי- אינו מבטא את קשייו מול הצוות וחבריו לכיתה',
                value: 0,
            },
            {
                name: 'קיים צורך בהתאמת ההתנהגות לסיטואציה חברתית בו נמצא',
                value: 0,
            },
            {
                name: 'קיים קושי בקבלת הלקות',
                value: 0,
            },
            {
                name: 'קיים צורך במיקוד אל הסיטואציה על מנת שישתתף בה',
                value: 0,
            },
            {
                name: 'אינו משתתף בשיח בכיתה',
                value: 0,
            },
            {
                name: 'אינו נייד באופן עצמאי',
                value: 0,
            },
            {
                name: 'מגלה קושי לגלות איפוק כלפי חבריו',
                value: 0,
            },
            {
                name: 'עליו ללמוד כיצד להתנהג בסיטואציה חברתית כאשר הוא לא המרכז בה',
                value: 0,
            },
        ]
    }
    ]

    const onChangeValue = (event) => {
        console.log(event.target.value);
    }

    return (
        <div className="app-com">
            <form onSubmit={handleSubmit(d => console.log(d))}>
                <div className="main-container">
                    <div className='strong_points'>
                        <h3 className="main-title">תחום לימודי - מוקדי חוזק</h3>
                        {strong_points[0].options.map((points) => {
                            return (
                                <div className="main" onClick={() => { return; }}>
                                    <h3>{points.name} </h3>
                                    <input checked="checked" type="radio" value="0" name={points.name} />0
                                    <input type="radio" value="1" name={points.name} /> 1
                                    <input type="radio" value="2" name={points.name} /> 2
                                    <input type="radio" value="3" name={points.name} /> 3
                                    <input type="radio" value="3" name={points.name} /> 4
                                    <input type="radio" value="3" name={points.name} /> 5
                                </div>
                            )
                        })}
                        <h3 className="main-title">תחום תקשורתי חברתי -  מוקדי חוזק</h3>
                        {strong_points[1].options.map((points, index) => {
                            return (
                                <div className="main" onSubmit={handleSubmit(onChangeValue)}>
                                    <h3>{points.name} </h3>
                                    <input  {...register(`${index}`, { required: "Please enter your first name." })} type="text" value="0" name={points.name} /> 0
  
                                </div>
                            )
                        })}
                    </div>
                    <div className='points_to_be_improved'>
                        <h3 className="main-title">תחום לימודי - מוקדים לחיזוק</h3>
                        {need_to_improve[0].options.map((points) => {
                            return (
                                <div className="main" onClick={() => { return; }}>
                                    <h3>{points.name} </h3>
                                    <input checked="checked" type="radio" value="0" name={points.name} />0
                                    <input type="radio" value="1" name={points.name} /> 1
                                    <input type="radio" value="2" name={points.name} /> 2
                                    <input type="radio" value="3" name={points.name} /> 3
                                    <input type="radio" value="3" name={points.name} /> 4
                                    <input type="radio" value="3" name={points.name} /> 5
                                </div>
                            )
                        })}
                        <h3 className="main-title">תחום תקשורתי חברתי - מוקדים לחיזוק</h3>
                        {need_to_improve[1].options.map((points) => {
                            return (
                                <div className="main" onClick={() => { return; }}>
                                    <h3>{points.name} </h3>
                                    <input checked="checked" type="radio" value="0" name={points.name} /> 0
                                    <input type="radio" value="1" name={points.name} /> 1
                                    <input type="radio" value="2" name={points.name} /> 2
                                    <input type="radio" value="3" name={points.name} /> 3
                                    <input type="radio" value="3" name={points.name} /> 4
                                    <input type="radio" value="3" name={points.name} /> 5
                                </div>
                            )
                        })}
                    </div>
                </div>
                <input className="input" type='submit' value='הוסף תוכנית' />
            </form>

        </div>
    );
};

export default Newplan;
