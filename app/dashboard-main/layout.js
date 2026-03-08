import Link from 'next/link';

export default function DashboradMainPage({ children, feed, stats, tab1, tab2 }) {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <div>{children}</div>
            <div>{feed}</div>
            <div>{stats}</div>
            <div>{tab1}</div>
            <div>{tab2}</div>

            <Link href="/dashboard-main/tab1">TAB1</Link>
            <Link href="/dashboard-main/tab2">TAB2</Link>

        </div>
    )
}