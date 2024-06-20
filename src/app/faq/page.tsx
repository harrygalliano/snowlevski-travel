import React from 'react';
import styles from './faq.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: 'Question 1',
        answer: 'Answer 1',
    },
    {
        question: 'Question 2',
        answer: 'Answer 2',
    },
];

const Faq: React.FC = () => {
    return (
        <div className={styles.faq_container}>
            <h1>Frequently Asked Questions</h1>
            {faqItems.map((item, index) => (
                <div key={index}>
                    <h3 className={styles.faq_question}>{item.question}</h3>
                    <h3 className={styles.faq_answer}>{item.answer}</h3>
                </div>
            ))}
        </div>
    );
};

export default Faq;
