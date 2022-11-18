import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, Avatar } from '@mui/material';
import { MenuContainer } from './styles';

const menuItems = [
    { name: 'Todas', href: '/' },
    { name: 'Nueva', href: '/polls/new' },
    { name: 'Metricas', href: '/polls/metricts'}
];

const Header: FC = () => {
    return (
        <AppBar>
            <Toolbar>
                <Avatar src="https://frcgustavo.com/_next/image?url=%2Ficons%2Fbloging-logo-192.png&w=48&q=75" />
                <MenuContainer>
                    {menuItems.map(({ name, href }) => (
                        <Button component={Link} to={href} sx={{ color: '#fff' }}>
                            {name}
                        </Button>
                    ))}
                </MenuContainer>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
