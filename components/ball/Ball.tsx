

export default function Ball({ color }: { color: string }) {
    return (
        <>
            <div className={`w-3 h-3 inline-block rounded-full bg-${color}-400`} />
        </>
    );
}

