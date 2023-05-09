import { Movie, TextFields } from '@mui/icons-material';
import { Box, Button, Modal, Rating, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const AddMovie = ({movies, setMovies}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [addTitle, setAddTitle] = useState("")
    const [addDesc, setAddDesc] = useState("")
    const [addPosterUrl, setAddPosterUrl] = useState("")
    const [addRating, setAddRating] = useState(0)
    
    const AddNewMovie = ()=>{
        setMovies([
            ...movies,
            {
                id : Math.random(),
                title : addTitle,
                description :addDesc,
                posterUrl : addPosterUrl,
                rating : addRating
            }
        ])
        handleClose()
    }

    return (
        <div>
            <Button onClick={handleOpen} variant="contained">Add Movie</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add new movie
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <TextField onChange={(e) => { setAddTitle(e.target.value) }} fullWidth id="outlined-basic" label="Title" variant="outlined" />
                    <TextField onChange={(e) => { setAddDesc(e.target.value) }} fullWidth id="outlined-basic" label="Description" variant="outlined" />
                    <TextField onChange={(e) => { setAddPosterUrl(e.target.value) }} fullWidth id="outlined-basic" label="PosterUrl" variant="outlined" />
                    <Rating fullWidth
                        name="simple-controlled"
                        value={addRating}
                        onChange={(event, newValue) => {
                            setAddRating(newValue);
                        }}
                    />
                    <br />
                    <Button onClick={AddNewMovie} variant="contained">cloce</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default AddMovie