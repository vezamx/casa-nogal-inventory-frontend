import { Box, Text } from '@chakra-ui/react';
import { ErrorMessage, ErrorMessageProps } from 'formik';

const FormErrorMessageComponent = (props: ErrorMessageProps) => {
  return (
    <ErrorMessage {...props}>
      {
        msg =>
          <Box>
            <Text
              fontSize='xl'
              color='tomato'
              as='b'
            >
              {msg}
            </Text>
          </Box>
      }
    </ErrorMessage>
  );
}

export default FormErrorMessageComponent;