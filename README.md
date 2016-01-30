# Juttle Memcached Adapter

TODO: ADD Travis-ci badge

Memcached adapter for the [Juttle data flow
language](https://github.com/juttle/juttle), with read & write support.

## Examples

TODO: add examples

## Installation

Like Juttle itself, the adapter is installed as a npm package. Both Juttle and
the adapter need to be installed side-by-side:

```bash
$ npm install juttle
$ npm install juttle-memcached-adapter
```

## Configuration

The adapter needs to be registered and configured so that it can be used from
within Juttle. To do so, add the following to your `~/.juttle/config.json` file:

```json
{
    "adapters": {
        "memcached": {
            "servers": {"localhost:11211"},
            "options" :{}
        }
    }
}
```

The `connection` key should point to your Memcached instance(s).

More documentation on the servers and options object can be found in the [memcached documentation](https://github.com/3rd-Eden/memcached)

## Usage

TODO: add usage

### Read options

TODO: read options

### Write options

TODO: write options

## Contributing

Contributions are welcome! Please file an issue or open a pull request.

To check code style and run unit tests:
```
npm test
```

Both are run automatically by Travis.

When developing you may run into failures during linting where jscs complains
about your coding style and an easy way to fix those files is to simply run
`jscs --fix test` or `jscs --fix lib` from the root directory of the project.
After jscs fixes things you should proceed to check that those changes are
reasonable as auto-fixing may not produce the nicest of looking code.
