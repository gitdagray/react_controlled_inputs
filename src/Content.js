import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content
