import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';

// import PropTypes from 'prop-types';
// import Typography from '@mui/material/Typography';

// function CircularProgressWithLabel(props) {



export default function CircularIndeterminate() {
  return (

    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '4vh' }}>
      <CircularProgress />
    </Stack>
  );
}


//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography
//           variant="caption"
//           component="div"
//           sx={{ color: 'text.secondary' }}
//         >
//           {`${Math.round(props.value)}%`}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// CircularProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate variant.
//    * Value between 0 and 100.
//    * @default 0
//    */
//   value: PropTypes.number.isRequired,

// };



// export default function CircularWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 200);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

// return <CircularProgressWithLabel value={progress} />;
// }