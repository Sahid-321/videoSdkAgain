export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJkODViM2EzOC1hMTE4LTQ0MDQtOTBkYi1lZjAxMWFkZDI1NjkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3NzA5NzI4MSwiZXhwIjoxNjc3NzAyMDgxfQ.Y8GA2ih9aHxLdzibyxWtkCxNYNphN0BIpiNLLaDjwgo"
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};
