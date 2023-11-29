const api = 'https://pokemon.fantasticmao.cn/pokemon/list';

const loadDataFromServer = async () => {
    const response = await fetch(api);
    const jsonData = await response.json();

    // 假设 jsonData.data 是宝可梦的数组
    if (jsonData && Array.isArray(jsonData.data)) {
        return jsonData.data.find(pokemon => pokemon.index === 17);
    }
    
    return null;
};

export default async (context) => {
    const pokemon = await loadDataFromServer();

    if (!pokemon) {
        return <div>Pokemon not found</div>;
    }

    return (
        <div>
            <h2>Pokemon Information</h2>
            <div>
                <strong>日本語：</strong> {pokemon.nameJa} <br />
                <strong>Name:</strong> {pokemon.nameZh} <br />
                <strong>ability:</strong> {pokemon.ability1} <br />
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`} alt={pokemon.nameZh} />
            </div>
        </div>
    );
};
