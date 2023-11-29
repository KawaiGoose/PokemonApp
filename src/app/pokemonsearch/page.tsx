'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // 注意：这里是 'next/router'，不是 'next/navigation'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const PokemonSearch = () => {
  const [inputId, setInputId] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`pokemonsearch/client?id=${inputId}`);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <TextField 
        type="number"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
        placeholder="Enter Pokémon ID"
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default PokemonSearch;

