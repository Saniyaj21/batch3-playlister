import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/axiosInterceptor.js";
import { base_url } from '../../main.jsx'

const initialState = {
    allPlaylists: [],
    publicPlaylists: [],
    selectedPlaylist: {},
    myPlaylists: [],
    status: {
        createPlaylist: 'idle',
        getPublicPlaylist: 'idle',
        deletePlaylist: 'idle',
        selectedPlaylist: "idle",
        addVideo: "idle",
        deleteVideo: "idle",
        myPlaylist: "idle",
    },
    error: ""
}

// api call functions
export const createPlaylist = createAsyncThunk('playlist/createPlaylist', async (formdata) => {
    const response = await api.post(
        `${base_url}/api/playlist/create`,
        formdata, {
        headers: {
            'Content-Type': 'application/json',

        },
        withCredentials: true
    }
    );
    return response.data;
})
export const getPublicPlaylist = createAsyncThunk('playlist/getPublicPlaylist', async () => {
    const response = await api.get(
        `${base_url}/api/playlist`,
        {
            headers: {
                'Content-Type': 'application/json',

            },
            withCredentials: true
        }
    );
    return response.data;
})
export const deletePlaylist = createAsyncThunk('playlist/deletePlaylist', async (playlistid) => {
    const response = await api.delete(
        `${base_url}/api/playlist/delete/${playlistid}`,
        {
            headers: {
                'Content-Type': 'application/json',

            },
            withCredentials: true
        }
    );
    return response.data;
})
export const getSelectedPlaylist = createAsyncThunk('playlist/getSelectedPlaylist', async (playlistid) => {
    const response = await api.get(
        `${base_url}/api/playlist/${playlistid}`,
        {
            headers: {
                'Content-Type': 'application/json',

            },
            withCredentials: true
        }
    );
    return response.data;
})
export const postVideoToPlaylist = createAsyncThunk('playlist/postVideoToPlaylist', async (formdata) => {
    const response = await api.post(
        `${base_url}/api/playlist/add-video`, formdata,
        {
            headers: {
                'Content-Type': 'application/json',

            },
            withCredentials: true
        }
    );
    return response.data;
})
export const deleteVideoFromPlaylist = createAsyncThunk('playlist/deleteVideoFromPlaylist', async (videoid) => {
    const response = await api.delete(
        `${base_url}/api/video/delete/${videoid}`,
        {
            headers: {
                'Content-Type': 'application/json',

            },
            withCredentials: true
        }
    );
    return response.data;
})
export const getMyPlaylistsSlice = createAsyncThunk('playlist/getMyPlaylistsSlice', async (userid) => {
    const response = await api.get(
        `${base_url}/api/playlist/my-playlists/${userid}`,
        {
            headers: {
                'Content-Type': 'application/json',

            },
            withCredentials: true
        }
    );
    return response.data;
})

const playlistSlice = createSlice({
    name: 'playlist',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // playlist create
            .addCase(createPlaylist.pending, (state, action) => {
                state.status.createPlaylist = 'loading';
            })
            .addCase(createPlaylist.fulfilled, (state, action) => {
                state.status.createPlaylist = 'success';
            })
            .addCase(createPlaylist.rejected, (state, action) => {
                state.status.createPlaylist = 'failed';
            })
            //get public playlist 
            .addCase(getPublicPlaylist.pending, (state, action) => {
                state.status.getPublicPlaylist = 'loading';
            })
            .addCase(getPublicPlaylist.fulfilled, (state, action) => {
                state.status.getPublicPlaylist = 'success';
                state.publicPlaylists = action.payload.playlists;
            })
            .addCase(getPublicPlaylist.rejected, (state, action) => {
                state.status.getPublicPlaylist = 'failed';
            })
            //delete playlist 
            .addCase(deletePlaylist.pending, (state, action) => {
                state.status.getPublicPlaylist = 'loading';
            })
            .addCase(deletePlaylist.fulfilled, (state, action) => {
                state.status.getPublicPlaylist = 'success';
                state.publicPlaylists = action.payload.playlists;
            })
            .addCase(deletePlaylist.rejected, (state, action) => {
                state.status.getPublicPlaylist = 'failed';
            })
            //delete playlist 
            .addCase(getSelectedPlaylist.pending, (state, action) => {
                state.status.selectedPlaylist = 'loading';
            })
            .addCase(getSelectedPlaylist.fulfilled, (state, action) => {
                state.status.selectedPlaylist = 'success';
                state.selectedPlaylist = action.payload.playlist;
            })
            .addCase(getSelectedPlaylist.rejected, (state, action) => {
                state.status.selectedPlaylist = 'failed';
            })
            //delete playlist 
            .addCase(postVideoToPlaylist.pending, (state, action) => {
                state.status.addVideo = 'loading';
            })
            .addCase(postVideoToPlaylist.fulfilled, (state, action) => {
                state.status.addVideo = 'success';
                state.selectedPlaylist = action.payload.playlist;
            })
            .addCase(postVideoToPlaylist.rejected, (state, action) => {
                state.status.addVideo = 'failed';
            })
            //delete playlist 
            .addCase(deleteVideoFromPlaylist.pending, (state, action) => {
                state.status.deleteVideo = 'loading';
            })
            .addCase(deleteVideoFromPlaylist.fulfilled, (state, action) => {
                state.status.deleteVideo = 'success';
                state.selectedPlaylist = action.payload.updatedPlaylist;
            })
            .addCase(deleteVideoFromPlaylist.rejected, (state, action) => {
                state.status.deleteVideo = 'failed';
            })
            //delete playlist 
            .addCase(getMyPlaylistsSlice.pending, (state, action) => {
                state.status.myPlaylist = 'loading';
            })
            .addCase(getMyPlaylistsSlice.fulfilled, (state, action) => {
                state.status.myPlaylist = 'success';
                state.myPlaylists = action.payload.myPlaylists;
            })
            .addCase(getMyPlaylistsSlice.rejected, (state, action) => {
                state.status.myPlaylist = 'failed';
            })

    }
})


export default playlistSlice.reducer;


// Export any actions you need
export const selectPlaylist = (state) => state.playlist;  
